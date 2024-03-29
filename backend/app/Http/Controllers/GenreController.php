<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateGenreRequest;
use App\Http\Resources\EventResource;
use App\Http\Resources\GenreCategoryResource;
use App\Http\Resources\GenreResource;
use App\Models\Category;
use App\Models\Event;
use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $genres = Genre::with('category')->get();
        //$genres = Genre::distinct()->get(['genre_name']);
        return GenreResource::collection($genres);
    }


    //method retrieving genres with associated categories
    function getGenreCategory($eventId)
    {
        $genreCategory = [];

        //new genre_id names
        $genre_ids = DB::table('genres')
            ->select('genre_id')
            ->where('event_id', $eventId)
            ->pluck('genre_id');

        //inserting the new genres to categories.
        //1. retrive


        foreach ($genre_ids as $id) {
            $genreCategory[] = $this->show($id);
        }
        return response()->json($genreCategory)->setStatusCode(Response::HTTP_OK, Response::$statusTexts[Response::HTTP_OK]);
    }


    public function getGenres()
    {
        //$genres = DB::table('genres')->distinct('genre_name')->select('genre_name')->get();
        $genres = Genre::distinct()->get(['genre_name']);
        return GenreResource::collection($genres);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'event_id' => ['required', 'integer'],
            'genre_names' => ['required', 'array'],
            'genre_names.*' => ['required', 'string', 'max:255']
        ]);


        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ])->setStatusCode(Response::HTTP_FORBIDDEN, Response::$statusTexts[Response::HTTP_FORBIDDEN]);
        }

        $genre = $request->genre_names;
        $event_id = $request->event_id;
        foreach ($genre as $gen) {
            $genre = Genre::create([
                'genre_name' => $gen,
                'event_id' => $event_id
            ]);

            if (DB::table('genres')->where('genre_name', $genre->genre_name)->exists()) {
                $genreValue = DB::table('genres')
                    ->select('genre_id')
                    ->where('genre_name','=',$genre->genre_name)
                    ->first();

                //collection of categories
                $category = DB::table('categories')
                    ->select('category_name')
                    ->where('genre_id','=',$genreValue->genre_id)
                    ->get();

                //return response()->json(['categories' => $category], 201);

                foreach ($category as $cat){
                    Category::create([
                        'category_name' => $cat->category_name,
                        'genre_id' => $genre->genre_id
                    ]);
                }
            }
        }

        //calling the find function, returns the category


        return Genre::all();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $genre = Genre::with('category')->find($id);
        if (!$genre) {
            return response()->json(['message' => 'Genre not found'], 404);
        }
        return new GenreResource($genre);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Genre $genre)
    {

        $validator = Validator::make($request->all(), [
            'genre_name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages(),
                'status' => Response::HTTP_FORBIDDEN,
            ]);
        }

        $genre->update($validator->safe()->only(['genre_name']));
        return new GenreResource($genre);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Genre $genre)
    {
        $genre->delete();
        return response()->json([
            'message' => 'Genre deleted successful',
            'status' => Response::HTTP_OK
        ]);
    }
}
