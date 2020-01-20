export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN'

export const signup = (email, password) => {
  return async dispatch => {
    const response = fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCtCJhw0co50LLLFBV_OL-2gsc8aJcezY', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const resData = await (await response).json()
    
    console.log(resData)

    dispatch({
      type: SIGNUP,
    })
  }
}

export const login = (email, password) => {
  return async dispatch => {
    const response = fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCtCJhw0co50LLLFBV_OL-2gsc8aJcezY', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const resData = await (await response).json()

    console.log(resData)

    dispatch({
      type: LOGIN,
    })
  }
}