<template>
  <div class="container d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card p-4 shadow-lg border-0 rounded-4 w-100" style="max-width: 400px;">

      <div class="text-center mb-4">
        <h2 class="fw-bold text-dark mb-1">Hotel Boutique </h2>
        <p class="text-muted small">Panel de Administración </p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label class="form-label small fw-bold text-secondary text-uppercase">Usuario</label>
          <input v-model="user" type="text" class="form-control form-control-lg border-secondary"
            placeholder="Ingrese su usuario" required>
        </div>

        <div class="mb-3">
          <label class="form-label small fw-bold text-secondary text-uppercase">Contraseña</label>
          <input v-model="pass" type="password" class="form-control form-control-lg border-secondary"
            placeholder="Ingrese su contraseña" required>
        </div>

        <button type="submit" class="btn btn-warning btn-lg fw-bold w-100 shadow-sm mt-2 text-white text-uppercase">
          Ingresar
        </button>
      </form>

      <div v-if="error"
        class="alert alert-danger d-flex align-items-center mt-3 small py-2 rounded-3 border-0 text-center justify-content-center"
        role="alert">
        <div>{{ error }}</div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import listaUsuarios from '../data/usuarios.json'

const user = ref('')
const pass = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = () => {

  error.value = ''

  const usuarioEncontrado = listaUsuarios.find(
    (u) => u.username === user.value && u.password === pass.value
  )

  if (usuarioEncontrado) {
    localStorage.setItem('user_authenticated', "true")
    router.push('/dashboard')
  } else {

    error.value = 'Las credenciales ingresadas son incorrectas.'
  }
}
</script>