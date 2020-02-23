import {
    INC,
    DEC,
    ADD_FIVE
} from '../../constants/counterTypes'

export const increment = () => {
    return {
        type: INC
    }
}
export const decrement = () => {
    return {
        type: DEC
    }
}

export const UserINC = (number) => {
    console.log("UserINC")
    return {
        type: ADD_FIVE,
        data: number
    }
}
export const addFive = (number) => {
    return async dispatch => {
        // setTimeout(() => {
        //     dispatch(UserINC(number))
        // }, 2000);
        try {
            const response = await getUserAsync("Rabson")
            console.log(response);
            // var g1 = getUserAsync("Rabson");
            // var response= g1.next();
            // while(!response.done){
            //     response = g1.next();
            // }
            // const final =  await response.value;
            // console.log(final)
            dispatch(UserINC(number));
          }
          catch(error) {
              alert(error)
          }
      
          return 'done';
    }
}

async function getUserAsync(name){
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json()
  return data;
}

// function* getUserAsync(name) {
//   console.log("getUserAsync called")
//   let response = yield fetch(`https://api.github.com/users/${name}`);
//   console.log(response)
//   let data = response.json()
//   debugger
//   console.log(data)
//   return data;
// }