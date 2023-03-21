import { createSlice , configureStore} from "@reduxjs/toolkit";



const initialCounterState = { counter: 0, showCounter: true };

const CounterSlice = createSlice({
    name: 'counter',
    initialState:initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action){
            state.counter=state.counter+action.payload;
        },
        decrease(state,action){
            state.counter=state.counter-action.payload;
        },
        toggle(state){
            state.showCounter=!state.showCounter;
        }
    }
})

const initialAuthenticationState={
    isAuthenticate:false
};

const authSlice=createSlice({
    name: 'auth',
    initialState:initialAuthenticationState,
    reducers:{
        login(state){
            state.isAuthenticate=true;
        },
        logout(state){
            state.isAuthenticate=false;
        }
    }

})

const store = configureStore({
    reducer : {counter : CounterSlice.reducer, auth: authSlice.reducer}
});

export const CounterActions=CounterSlice.actions;
export const AuthActions=authSlice.actions;

export default store;

