<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold text-warning" href="#">
        <i class="bi bi-building-fill me-2"></i> Hotel Boutique
      </a>
      
      <span class="navbar-text text-white mx-auto fw-semibold fs-5 d-none d-md-block">
        {{ seccion }}
      </span>

      <div class="d-flex align-items-center">
        <router-link to="/dashboard" class="btn btn-outline-light btn-sm me-2 fw-medium">
          <i class="bi bi-speedometer2 me-1"></i>Dashboard
        </router-link>
        <router-link to="/cartelera" class="btn btn-outline-warning btn-sm me-2 fw-medium">
          <i class="bi bi-door-open me-1"></i>Habitaciones
        </router-link>
        <router-link to="/" class="btn btn-danger btn-sm fw-medium">
          <i class="bi bi-box-arrow-right me-1"></i>Salir
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>

defineProps({
  seccion: {
    type: String,
    default: 'Sistema de Gestión'
  }
})
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
</style>