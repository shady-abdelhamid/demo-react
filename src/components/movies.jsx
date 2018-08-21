import React, {Component} from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies()
    };
    handleDelete = movie => { };

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.movies.map(movie => (
                        <tr>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStoke}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <butten className="btn btn-danger">Delete</butten>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Movies;
