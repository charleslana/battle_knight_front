<template>
  <v-dialog max-width="500" persistent transition="dialog-top-transition">
    <template v-slot:default="">
      <v-card>
        <v-card-title class="headline">Login</v-card-title>
        <v-card-text>
          <form @submit.prevent="handleSubmit">
            <v-text-field
              v-model.trim="state.email"
              :error-messages="emailErrors"
              clearable
              label="Insira seu E-mail"
              required
              @blur="v$.email.$touch"
              @input="v$.email.$touch"
            ></v-text-field>
            <v-text-field
              v-model.trim="state.password"
              :counter="50"
              :error-messages="passwordErrors"
              :type="showPassword ? 'text' : 'password'"
              clearable
              label="Insira a Senha"
              required
              @blur="v$.password.$touch"
              @input="v$.password.$touch"
            >
              <template v-slot:append>
                <v-btn
                  icon
                  @click="showPassword = !showPassword"
                >
                  <v-icon>{{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
                </v-btn>
              </template>
            </v-text-field>
            <v-alert
              v-if="errorMessage"
              v-model="showAlert"
              class="mt-4"
              type="error"
            >
              {{ errorMessage }}
            </v-alert>
            <v-card-actions>
              <v-row dense>
                <v-col>
                  <v-btn
                    :disabled="overlay || isFormValid"
                    :loading="overlay"
                    class="me-4"
                    color="surface-variant"
                    type="submit"
                    variant="flat"
                  >
                    Entrar
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn variant="plain" @click="openRegisterDialog">
                    É novo por aqui?
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Fechar" @click="closeModal">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {email, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const showPassword = ref(false);
const showAlert = ref(true);
const errorMessage = ref<string | null>(null);

const initialState = {
  password: '',
  email: '',
}
const state = reactive({
  ...initialState,
})

const rules = {
  password: {required},
  email: {required, email},
}

const v$ = useVuelidate(rules, state);

const router = useRouter();

const emailErrors = computed(() =>
  v$.value.email.$errors.map(e => e.$message) as string[]
);

const passwordErrors = computed(() =>
  v$.value.password.$errors.map(e => e.$message) as string[]
);

const isFormValid = computed(() => {
  return v$.value.$invalid;
});

const handleSubmit = async () => {
  errorMessage.value = null;
  if (!await validateFields()) {
    return;
  }
  emit('loading', true);
  try {
    setTimeout(() => {
      emit('loading', false);
      const isLoginSuccessful = true;
      if (!isLoginSuccessful) {
        errorMessage.value = 'Erro ao tentar fazer login. Verifique suas credenciais e tente novamente.';
        return;
      }
      router.push("/main");
    }, 2000);
  } catch (error) {
    emit('loading', false);
    console.error("Error during login process:", error);
  }
}

const validateFields = async () => {
  return await v$.value.$validate();
}

const openRegisterDialog = async () => {
  emit('register');
}

defineProps({
  overlay: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close', 'loading', 'register']);

function closeModal(): void {
  emit('close');
}
</script>

<style scoped></style>
