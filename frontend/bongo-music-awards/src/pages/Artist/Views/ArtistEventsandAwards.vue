<template>
  <q-page padding>
    <div class="row items-center q-mt-xl">
      <p class="font-body-small q-pl-md col">
        <span class="text-weight-bolder text-capitalize text-h6"
          >events and awards</span
        >
      </p>
    </div>
    <q-table
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      class="q-mt-md"
    >
      <template #body-cell-status="props">
        <q-td>
          <q-badge
            v-if="props.row.event_status === 'closed'"
            dense
            color="red"
            size="10px"
            label="closed"
            class="q-ma-xs"
          >
          </q-badge>

          <q-badge
            v-if="props.row.event_status === 'active'"
            dense
            color="green"
            size="10px"
            label="Active"
            class="q-ma-xs"
          >
          </q-badge>
        </q-td>
      </template>
      <template #body-cell-action="props">
        <q-td>
          <q-btn
            class=""
            icon="mdi-eye"
            flat
            dense
            color="primary"
            size="10px"
            @click="eventDetails(props.row.event_id)"
          >
          </q-btn>
        </q-td>
      </template>
      <template #top-right>
        <q-input
          outlined
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template #append>
            <q-icon name="mdi-magnify" />
          </template>
        </q-input>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { api } from "src/boot/axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const filter = ref("");

const columns = ref([
  {
    name: "event_name",
    label: "Event Name",
    align: "left",
    field: (row) => row.event_title,
    sortable: true,
  },
  {
    name: "event_number",
    label: "Event Number",
    align: "left",
    field: (row) => row.event_number,
    sortable: true,
  },
  {
    name: "date",
    label: "Date",
    align: "left",
    field: (row) => row.event_date,
    sortable: true,
  },
  {
    name: "status",
    label: "Status",
    field: (row) => row.event_status,
    align: "left",
  },
  {
    name: "action",
    label: "action",
    align: "left",
  },
]);
const rows = ref([]);

const getEvents = async () => {
  try {
    const response = await api.get("/events");
    console.log(response.data.data);
    rows.value = response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const eventDetails = (event_id) => router.push(`/artist/event/${event_id}`);

onMounted(() => {
  getEvents();
});
</script>

<style lang="scss" scoped></style>
