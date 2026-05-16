<template>
  <div class="d-flex bg-light min-vh-100">
    <SidebarComponent />

    <div class="flex-grow-1 d-flex flex-column">
      <NavbarComponent :seccion="'Panel de Control - ' + nombreHotel" />

      <div class="container my-5 px-4">
        <div class="card p-5 shadow-sm border-0 rounded-4 bg-white mb-5 text-center">
          <div class="mb-3">
            <i class="bi bi-building shadow-sm bg-warning p-3 rounded-circle text-white fs-1"></i>
          </div>
          <h1 class="fw-bold text-dark mb-2">Panel de Control General</h1>
          <p class="text-muted fs-5 mb-0">Software de administración de inventarios, habitaciones y tarifas base de {{ nombreHotel }}.</p>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h4 class="fw-bold text-dark mb-0 text-uppercase tracking-wide">Muestreo de Acomodaciones Activas</h4>
          <span class="badge bg-dark px-3 py-2 fs-6 rounded-pill text-warning fw-bold shadow-sm">
            {{ habitaciones.length }} Habitaciones en Sistema
          </span>
        </div>
        
        <div class="row g-4">
          <div v-for="(habitacion, index) in habitaciones" :key="index" class="col-md-4 col-sm-6">
            <ProductCardComponent 
              :nombre="habitacion.titulo" 
              :precio="Number(habitacion.precio)" 
              :categoria="habitacion.sala" 
              @ver-detalle="alertaDetalle(habitacion.titulo, habitacion.sala, habitacion.precio)" 
            />
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SidebarComponent from '../components/SidebarComponent.vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import ProductCardComponent from '../components/ProductCardComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

// Nombre unificado de tu negocio
const nombreHotel = ref('Hotel Boutique')

// Arreglo reactivo que contendrá el inventario del LocalStorage
const habitaciones = ref([])

// El inventario base de 10 habitaciones por si el almacenamiento local está vacío
const habitacionesBase = [
  { "titulo": "Habitación 101", "precio": 80000, "sala": "Habitación Sencilla Estándar" },
  { "titulo": "Habitación 102", "precio": 80000, "sala": "Habitación Sencilla Estándar" },
  { "titulo": "Habitación 201", "precio": 120000, "sala": "Habitación Doble Premium" },
  { "titulo": "Habitación 202", "precio": 120000, "sala": "Habitación Doble Premium" },
  { "titulo": "Habitación 301", "precio": 200000, "sala": "Suite Presidencial" },
  { "titulo": "Habitación 302", "precio": 200000, "sala": "Suite Presidencial" },
  { "titulo": "Habitación 103", "precio": 85000, "sala": "Habitación Sencilla Estándar" },
  { "titulo": "Habitación 203", "precio": 130000, "sala": "Habitación Doble Premium" },
  { "titulo": "Habitación 104", "precio": 85000, "sala": "Habitación Sencilla Estándar" },
  { "titulo": "Habitación 303", "precio": 220000, "sala": "Suite Presidencial" }
]

onMounted(() => {
  // Sincronización en tiempo real del ciclo de vida con la persistencia local
  const local = localStorage.getItem('mi_hotel_storage')
  if (local && JSON.parse(local).length > 0) {
    habitaciones.value = JSON.parse(local)
  } else {
    habitaciones.value = [...habitacionesBase]
    localStorage.setItem('mi_hotel_storage', JSON.stringify(habitaciones.value))
  }
})

// Función para el evento personalizado ($emit) que pide la guía en el punto 5
const alertaDetalle = (titulo, categoria, precio) => {
  alert(`[AUDITORÍA INTERNA]\n\nEstructura: ${titulo}\nCategoría: ${categoria}\nTarifa base: $${Number(precio).toLocaleString()} COP\nEstado: Operativa / Limpia.`);
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
</style>