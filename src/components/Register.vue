<template>
  <div class="container min-vh-100 d-flex justify-content-center align-items-center bg-light">
    <!-- register form start -->
    <div class="row w-100 justify-content-center align-items-center flex-column-reverse flex-md-row animate__animated animate__fadeIn">
      <div class="col-12 col-md-4">
        <div>
          <h2 class="fw-bold text-nowrap text-center">Xin chào đến với chat-room của Dũng !</h2>
          <p class="small text-black-50">Không có ai nhắn tin cho bạn à? Bây giờ, bạn đang ở đúng nơi rồi đấy 😋!</p>
        </div>
        <div>
          <div class="card shadow">
            <div class="card-body">
              <form @submit.prevent="register">
                <div class="mb-3">
                  <label for="" class="form-label">Biệt danh</label>
                  <input required type="text" class="form-control" v-model="displayName" />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Email</label>
                  <input required type="email" class="form-control" v-model="email" />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Mật khẩu</label>
                  <input required type="password" class="form-control" v-model="password" placeholder="Tối thiểu 6 ký tự" />
                </div>
                <p class="alert alert-danger py-1" v-if="error">
                  <small>{{ error }}</small>
                </p>
                <div class="mb-3">
                  <button class="btn btn-success w-100"><span class="spinner-grow spinner-grow-sm me-2" role="status" v-if="isRegistering"></span>Đăng Ký</button>
                </div>
              </form>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="w-100 mb-3 mb-md-0">
          <img src="../assets/texting-animate.svg" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import userSignUp from "../composables/useRegister";
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let { isRegistering, error, signUp } = userSignUp();
    let register = async () => {
      let res = await signUp(displayName.value, email.value, password.value);
      if (res) {
        console.log(res);
      }
    };
    return { displayName, email, password, register, error, isRegistering };
  },
};
</script>

<style lang="scss" scoped></style>
