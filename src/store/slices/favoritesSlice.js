import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favList: [],
        count: 0
    },
    reducers: {
        addSongToList (state, action) {
            const new_song = action.payload
            if (!state.favList.find(song => song.id === new_song.id)){
                state.favList.push({...new_song, count: 1})
            } else {
                const new_list = state.favList.map(song => {
                    if (song.id === new_song.id) {
                        return {...song, count: song.count + 1}
                    } else {
                        return song
                    }
                })
                state.favList = new_list
            }
            state.count++
        },
        removeSongFromList (state, action) {
            const song_id = action.payload
            state.favList = state.favList.filter(song => song.id !== song_id)
            state.count--
        },
        emptyList (state) {
            state.favList = []
            state.count = 0
        }
    }
})

export const {addSongToList, removeSongFromList, emptyList} = favoritesSlice.actions;
export default favoritesSlice.reducer;