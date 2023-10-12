import axios from "axios"

export const getServicios = async (setPrestadores: Function, prestadorId: any) => {

    await axios.get(
        `https://jsonplaceholder.typicode.com/users/${prestadorId ? prestadorId : ''}`,
    )
        .then(function (response) {
            setPrestadores(response.data)
        })
        .catch(function (err) {
            console.log(err);
        })
};