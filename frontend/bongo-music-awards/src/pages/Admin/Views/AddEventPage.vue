<template>
  <q-page padding>
    <p class="font-body-small text-capitalize q-pl-md">
      <q-breadcrumbs gutter="none">
        <q-breadcrumbs-el
          label="Back to Events"
          icon="mdi-arrow-left-thick"
          to="/admin/eventsandawards"
        />
      </q-breadcrumbs>
    </p>
    <q-stepper
      ref="stepper"
      v-model="STEP"
      :contracted="$q.screen.lt.md"
      animated
      color="primary"
    >
      <q-step :done="STEP > 1" :name="1" prefix="1" title="Event">
        <q-input
          v-model="addEvent.event_title"
          class="q-ma-lg"
          dense
          label="Event name"
          outlined
        />
        <q-input
          v-model="addEvent.event_number"
          class="q-ma-lg"
          dense
          label="Event number"
          outlined
        />
        <q-input
          v-model="addEvent.event_date"
          :rules="['date']"
          class="q-ma-lg"
          dense
          hint="Date of Event"
          mask="date"
          outlined
        >
          <template #append>
            <q-icon class="cursor-pointer" name="event">
              <q-popup-proxy
                cover
                transition-hide="scale"
                transition-show="scale"
              >
                <q-date v-model="addEvent.event_date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup color="primary" flat label="Close" />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-stepper-navigation>
          <q-btn color="primary" label="Continue" @click="eventSubmit()" />
        </q-stepper-navigation>
      </q-step>

      <q-step :done="STEP > 2" :name="2" prefix="2" title="Genre">
        <q-banner
          inline-actions
          v-if="genre_data != ''"
          class="q-ml-xs q-mt-md bordered"
        >
          <div class="text-sm text-green text-bold">
            *Genre suggestions, select all that apply by clicking X
          </div>
          <q-chip
            v-for="(genre, index) in genre_data"
            :key="index"
            :label="genre"
            class="chip-margin"
            color="primary"
            removable
            @remove="handleRemove(genre)"
            outlined
          />

          <!-- <template v-slot:action>
            <q-btn
              class="text-capitalize"
              color="primary"
              label="add genres"
              @click="addGenres()"
            />
          </template> -->
        </q-banner>
        <div class="text-sm text-red q-pa-lg text-bold">
          *If genres are not available you can add them bellow
        </div>
        <div class="row flex justify-center q-gutter-x-sm">
          <q-input
            v-model="newGenre"
            style="width: 85%"
            dense
            label="Add new genres"
            outlined
          />
          <q-btn
            label="Add Genre"
            color="primary"
            class="text-capitalize"
            @click="removeOrAddChip"
          ></q-btn>
        </div>
        <q-banner
          inline-actions
          v-if="selected_genres != ''"
          class="q-ml-xs q-mt-md bordered"
        >
          <div class="text-sm text-green text-bold">*selected genres</div>
          <q-chip
            v-for="(genre, index) in selected_genres"
            :key="index"
            :label="genre"
            class="chip-margin"
            color="primary"
            outlined
          />

          <!-- <template v-slot:action>
            <q-btn
              class="text-capitalize"
              color="primary"
              label="add genres"
              @click="addGenres()"
            />
          </template> -->
        </q-banner>
        <q-stepper-navigation>
          <q-btn color="primary" label="Continue" @click="genresSubmit()" />
          <q-btn
            v-if="STEP > 1"
            class="q-ml-sm"
            color="primary"
            flat
            label="Back"
            @click="$refs.stepper.previous()"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" prefix="3" title="Categories">
        <!-- <div class="q-gutter-sm">
          <q-select
            v-model="addEvent.branch_id"
            class="q-ma-lg"
            dense
            emit-value
            map-options
            @update:model-value="selectedCat(addEvent.branch_id)"
            :options="genres_category"
            label="Choose Genre"
            outlined
          />
        </div>
        <div class="text-sm text-red text-bold">
          *If categories are not available you can add them bellow
        </div>
        <q-input
        v-if="show"
          v-model="cat_name"
          class="q-ma-lg"
          dense
          label="Add new categories"
          outlined
        />
        <div class="text-sm text-green text-bold">
          *You can apply all categories bellow or modify as you need
        </div>

        <q-banner
          inline-actions
          v-if="category_data != ''"
          :categories_data="categoriesData"
          class="q-ml-xs q-mt-md bordered"
        >
          <div>
            <q-chip
              v-for="(category, index) in category_data"
              :key="index"
              :label="categories"
              class="chip-margin"
              color="primary"
              removable
              outlined
            />
          </div>
          <template v-slot:action>
            <q-btn
              class="text-capitalize"
              color="primary"
              label="add genres"
              @click="addCategory()"
            />
          </template>
        </q-banner> -->
        <q-table :rows="formattedRows" :columns="columns" :row-key="'id'">
          <template v-slot:body-cell-categories="props">
            <q-td :props="props" :key="props.key">
              <q-item
                v-for="(category, index) in props.row.categories"
                :key="index"
              >
                <q-item-section>
                  <q-chip removable @remove="removeCategory(props.row, index)">
                    {{ category }}
                  </q-chip>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-actions="props">
            <q-td :props="props" :key="props.key">
              <q-btn
                color="primary"
                class="text-capitalize"
                label="Add Category"
                dense
                @click="addCategory(props.row)"
              />
            </q-td>
          </template>
        </q-table>

        <q-stepper-navigation>
          <q-btn
            label="Finish"
            color="primary"
            @click="STEP === 3 ? finish() : $refs.stepper.next()"
          />
          <q-btn
            v-if="STEP > 1"
            class="q-ml-sm"
            color="primary"
            flat
            label="Back"
            @click="$refs.stepper.previous()"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script setup>
import { api } from "src/boot/axios";
import { computed, onMounted, reactive, ref, watch } from "vue";
import { Notify, useQuasar } from "quasar";

import { useRouter } from "vue-router";
const apiResponse = ref([]);
const formattedRows = ref([]);
const router = useRouter();
const $q = useQuasar();
const STEP = ref(1);
const rol = ref([]);
const branches = ref([]);
const addEvent = ref({
  event_title: "",
  event_number: "",
  event_date: "",
  event_status: "closed",
});
const newGenre = ref("");
const genre_data = ref([]);
const selected_genres = ref([]);
const columns = [
  { name: "genre", align: "left", label: "Genre", field: "genre" },
  {
    name: "categories",
    align: "left",
    label: "Categories",
    field: "categories",
  },
  {
    name: "actions",
    align: "left",
    label: "Actions",
    // field: "categories",
  },
];
const removeCategory = (row, index) => {
  row.categories.splice(index, 1);
};
const handleRemove = (genre) => {
  // remove genre from genres array
  const index = genre_data.value.indexOf(genre);
  if (index !== -1) {
    genre_data.value.splice(index, 1);
  }
  // add removed chip to removedChips array
  selected_genres.value.push(genre);
  console.log(selected_genres);
};
const removeOrAddChip = () => {
  // find chip with matching name and remove it from chips array
  const index = genre_data.value.findIndex((genre) => genre === newGenre.value);
  if (index !== -1) {
    const selected_genre = genre_data.value.splice(index, 1)[0];
    // add removed chip to selected_genres array
    selected_genres.value.push(selected_genre);
  } else {
    // create new genre object and add it to  selected_genres array
    const selected_genre = newGenre.value;
    selected_genres.value.push(selected_genre);
  }
  newGenre.value = ""; // clear input field after removing/adding chip
};
const category_data = ref([
  "Best artist of the year",
  "Best album of the year",
  "Best video of the year",
]);
const form_data = () => {
  const formData = new FormData();
  formData.append("event_title", addEvent.value.event_title);
  formData.append("event_number", addEvent.value.event_number);
  formData.append("event_date", addEvent.value.event_date);
  formData.append("event_status", addEvent.value.event_status);
  // formData.append("event_genres", selected_genres.value.event_genres);
  return formData;
};
const continueBtn = ref(null);
// const addStep = ()=> {
//   STEP.value = 2;
// };
const eventSubmit = async () => {
  // STEP.value = 2;
  try {
    const { status, data } = await api.post("/events", form_data());
    sessionStorage.removeItem("event_id");
    sessionStorage.setItem("event_id", data.data.event_id);
    if (status === 200) {
      STEP.value = 2;
    }
  } catch (error) {
    $q.notify({
      message: error.response.data.message,
      type: "negative",
      position: "top-right",
    });
  }
};
const genresSubmit = async () => {
  try {
    const eventId = sessionStorage.getItem("event_id");
    // Loop through the selected_genres array and append the event ID to each value
    // selected_genres.value.forEach((genre, index) => {
    //   selected_genres.value[index] = `${event_id}_${genre}`;
    // });

    const payload = {
      event_id: eventId,
      genre_names: selected_genres.value,
    };

    // // Append the selected_genres array to the form data object
    // selected_genres.value.forEach((genre) => {
    //   formData.append("selected_genres[]", genre);
    // });

    const { data } = await api.post("/genres", payload);
    const response = await api.get(`/genre_categories/${eventId}`);
    apiResponse.value = response.data;

    STEP.value = 3;
    // data.forEach(element => {
    //   genres_category.value.push({
    //   value:element.genre_id,
    //   label: element.genre_name,
    // })
    // });

    // console.log(genres_category.value);
    // sessionStorage.removeItem("event_id");
  } catch (error) {}

  // console.log(data.data);
};

// Watch for changes in the API response and update the formattedRows accordingly
watch(apiResponse, (newApiResponse) => {
  formattedRows.value = newApiResponse.map((item, index) => ({
    id: index + 1,
    genre: item.genre_name,
    categories: item.categories.map((category) => category.category_name),
  }));
});

const finish = ()=>{
  router.push('/admin/eventsandawards')
}

const roles = async () => {
  try {
    const roles = await api.get("/roles");
    rol.value = roles.data.data;
  } catch (error) {}
};

const getGenres = async () => {
  try {
    const response = await api.get("/event_genres");
    const { data } = response;
    // Extract just the genre names using map() and array destructuring
    const names = data.data.map(({ genre_name }) => genre_name);
    genre_data.value = names;
  } catch (error) {}
};
const gen_id = ref();
const selectedCat = (genre_id) => {
  gen_id.value = genre_id;
};

const cat_data = ref([]);

const cat_name = ref();

const addCategory = () => {
  cat_data.value.push({
    genre: {
      genre_id: gen_id.value,
      cat_name: cat_name.value,
    },
  });

  console.log(cat_data.value);
};

// const getAvailableCategories = async () => {
//   try {
//     const { data } = await api.post("/categories", cat_data.value);
//     console.log(data);
//   } catch (error) {}
// };

onMounted(() => {
  // roles();
  getGenres();
});
</script>
<style lang="scss" scoped></style>
