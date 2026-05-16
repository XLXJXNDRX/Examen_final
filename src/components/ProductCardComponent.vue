<template>
  <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-white">
    <div class="bg-warning text-white p-4 text-center">
      <i class="bi bi-door-closed fs-1"></i>
    </div>
    <div class="card-body p-4 text-center">
      <h5 class="fw-bold text-dark mb-1">{{ nombre }}</h5>
      <span class="badge bg-secondary mb-3">{{ categoria }}</span>
      <h4 class="fw-bold text-success mb-0">${{ precio.toLocaleString() }}</h4>
    </div>
    <div class="card-footer bg-light p-3 border-0">
      <button @click="$emit('ver-detalle')" class="btn btn-outline-dark btn-sm w-100 fw-semibold">
        Ver Detalles Internos
      </button>
    </div>
  </div>
</template>

<script setup>

defineProps({
  nombre: String,
  precio: Number,
  categoria: String
})


defineEmits(['ver-detalle'])
</script>