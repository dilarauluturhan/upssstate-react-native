// async thunk, bir fonksiyonu çağırdığımızda cevap gelme süresi boyunca beklememizi sağlıyor
// bunun için de üç farklı seçenek sunuyor: yükleniyor, yüklendi, reddedildi
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithEmailAndPassword,
  User,
  signOut,
} from "firebase/auth";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

export const login = createAsyncThunk<LoginResponse, LoginPayload>(
  "user/login",
  async ({ email, password }) => {
    try {
      const auth = getAuth(); // auth işlemi olup olmadığını kontrol ediyo
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const token = await user.getIdToken(); // const token = user.stsTokenManager.accessToken;

      const userData = {
        token,
        user: user,
      };

      return userData;
    } catch (error) {
      console.log("userSlice error:", error);
      throw error;
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  try {
    const auth = getAuth();
    await signOut(auth);

    return null;
  } catch (error) {
    throw error;
  }
});

export interface UserState {
  name: any;
  lastname: any;
  email: any;
  password: any;
  isLoading: boolean;
  isAuth: boolean;
  token: any;
  user: any;
  error: any;
}

// başlangıçta yüklenecek olan state'lerim
const initialState: UserState = {
  name: null,
  lastname: null,
  email: null,
  password: null,
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // state, initialState'İ temsilen
  // action için, setEmail'i başka dosyalarda kullanıyo olmama action olarak gidiyor diyebiliriz
  // payload, action içinde gelen value'dur
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
    setEmail: (state, action) => {
      const lowerCaseEmail = action.payload.toLowerCase();
      state.email = lowerCaseEmail;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      }) // yükleniyor
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      }) // başarılı
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.error.message;
      }) // başarısız

      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.token = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setName, setLastname, setEmail, setPassword, setIsLoading } =
  userSlice.actions;
export default userSlice.reducer;
