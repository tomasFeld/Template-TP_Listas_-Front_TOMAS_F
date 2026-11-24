let comidas = [
  { "nombre": "Asado", "categoria": "Parrilla", "provincia": "Buenos Aires", "ingredientes": ["Carne vacuna", "Sal", "Chimichurri"] },
  { "nombre": "Empanadas", "categoria": "Horno", "provincia": "Tucumán", "ingredientes": ["Carne", "Cebolla", "Aceitunas", "Huevo"] },
  { "nombre": "Locro", "categoria": "Guiso", "provincia": "Salta", "ingredientes": ["Maíz", "Porotos", "Chorizo", "Panceta", "Zapallo"] },
  { "nombre": "Milanesa", "categoria": "Frito", "provincia": "Buenos Aires", "ingredientes": ["Carne", "Huevo", "Pan rallado", "Aceite"] },
  { "nombre": "Humita en Chala", "categoria": "Horno", "provincia": "Jujuy", "ingredientes": ["Maíz", "Queso", "Cebolla", "Ají molido"] },
  { "nombre": "Choripán", "categoria": "Parrilla", "provincia": "Córdoba", "ingredientes": ["Chorizo", "Pan", "Chimichurri"] },
  { "nombre": "Provoleta", "categoria": "Parrilla", "provincia": "Buenos Aires", "ingredientes": ["Queso provolone", "Orégano", "Aceite de oliva"] },
  { "nombre": "Milanesas a la napolitana", "categoria": "Frito", "provincia": "Santa Fe", "ingredientes": ["Carne", "Tomate", "Queso", "Jamón", "Orégano"] },
  { "nombre": "Matambre a la pizza", "categoria": "Parrilla", "provincia": "Buenos Aires", "ingredientes": ["Matambre", "Queso", "Tomate", "Orégano"] },
  { "nombre": "Torta Frita", "categoria": "Frito", "provincia": "Entre Ríos", "ingredientes": ["Harina", "Agua", "Sal", "Grasa"] },
  { "nombre": "Tamales", "categoria": "Horno", "provincia": "Salta", "ingredientes": ["Maíz", "Carne", "Cebolla", "Ají"] },
  { "nombre": "Cazuela de cordero", "categoria": "Guiso", "provincia": "Patagonia", "ingredientes": ["Cordero", "Papas", "Zanahorias", "Vino blanco"] },
  { "nombre": "Revuelto Gramajo", "categoria": "Salteado", "provincia": "Buenos Aires", "ingredientes": ["Papas fritas", "Huevos", "Jamón"] },
  { "nombre": "Milanesas de pollo", "categoria": "Frito", "provincia": "Córdoba", "ingredientes": ["Pollo", "Pan rallado", "Huevo", "Ajo"] },
  { "nombre": "Arroz con leche", "categoria": "Postre", "provincia": "Corrientes", "ingredientes": ["Arroz", "Leche", "Azúcar", "Canela"] },
  { "nombre": "Puchero", "categoria": "Guiso", "provincia": "Entre Ríos", "ingredientes": ["Carne", "Papas", "Batata", "Chorizo"] },
  { "nombre": "Sopa paraguaya", "categoria": "Horno", "provincia": "Formosa", "ingredientes": ["Harina de maíz", "Queso", "Cebolla", "Huevo"] },
  { "nombre": "Pollo al disco", "categoria": "Parrilla", "provincia": "La Pampa", "ingredientes": ["Pollo", "Cebolla", "Morrón", "Vino blanco"] },
  { "nombre": "Ensalada rusa", "categoria": "Ensalada", "provincia": "Buenos Aires", "ingredientes": ["Papa", "Zanahoria", "Arvejas", "Mayonesa"] },
  { "nombre": "Chivito a la estaca", "categoria": "Parrilla", "provincia": "Mendoza", "ingredientes": ["Chivito", "Sal", "Ajo", "Romero"] },
  { "nombre": "Arrollado de pollo", "categoria": "Horno", "provincia": "Santa Fe", "ingredientes": ["Pollo", "Jamón", "Queso", "Zanahoria"] },
  { "nombre": "Guiso de lentejas", "categoria": "Guiso", "provincia": "Buenos Aires", "ingredientes": ["Lentejas", "Chorizo", "Panceta", "Papas"] },
  { "nombre": "Ñoquis", "categoria": "Pasta", "provincia": "Buenos Aires", "ingredientes": ["Papa", "Harina", "Queso", "Salsa"] },
  { "nombre": "Polenta con tuco", "categoria": "Guiso", "provincia": "Buenos Aires", "ingredientes": ["Polenta", "Carne", "Tomate", "Queso"] },
  { "nombre": "Canelones", "categoria": "Pasta", "provincia": "Buenos Aires", "ingredientes": ["Harina", "Espinaca", "Ricota", "Salsa de tomate"] },
  { "nombre": "Bondiola a la cerveza", "categoria": "Parrilla", "provincia": "Buenos Aires", "ingredientes": ["Bondiola", "Cerveza", "Ajo", "Orégano"] },
  { "nombre": "Sorrentinos", "categoria": "Pasta", "provincia": "Buenos Aires", "ingredientes": ["Harina", "Queso", "Jamón", "Ricota"] },
  { "nombre": "Pizza de muzzarella", "categoria": "Horno", "provincia": "Buenos Aires", "ingredientes": ["Harina", "Levadura", "Queso", "Salsa de tomate"] },
  { "nombre": "Faina", "categoria": "Horno", "provincia": "Buenos Aires", "ingredientes": ["Harina de garbanzo", "Agua", "Sal", "Aceite"] },
  { "nombre": "Ravioles", "categoria": "Pasta", "provincia": "Buenos Aires", "ingredientes": ["Harina", "Carne", "Ricota", "Salsa de tomate"] },
  { "nombre": "Flan casero", "categoria": "Postre", "provincia": "Buenos Aires", "ingredientes": ["Leche", "Huevos", "Azúcar", "Vainilla"] },
  { "nombre": "Helado artesanal", "categoria": "Postre", "provincia": "Buenos Aires", "ingredientes": ["Leche", "Azúcar", "Frutas", "Crema"] },
  { "nombre": "Pastel de papa", "categoria": "Horno", "provincia": "Buenos Aires", "ingredientes": ["Papa", "Carne", "Cebolla", "Queso"] },
  { "nombre": "Tarta de jamón y queso", "categoria": "Horno", "provincia": "Buenos Aires", "ingredientes": ["Harina", "Jamón", "Queso", "Huevo"] },
  { "nombre": "Panqueques con dulce de leche", "categoria": "Postre", "provincia": "Buenos Aires", "ingredientes": ["Harina", "Huevo", "Leche", "Dulce de leche"] },
  { "nombre": "Tarta de ricota", "categoria": "Postre", "provincia": "Buenos Aires", "ingredientes": ["Ricota", "Azúcar", "Harina", "Huevos"] },
  { "nombre": "Milhojas de dulce de leche", "categoria": "Postre", "provincia": "Buenos Aires", "ingredientes": ["Masa hojaldrada", "Dulce de leche", "Azúcar glas"] },
  { "nombre": "Bizcochuelo", "categoria": "Postre", "provincia": "Buenos Aires", "ingredientes": ["Harina", "Azúcar", "Huevos", "Esencia de vainilla"] },
  { "nombre": "Facturas", "categoria": "Panadería", "provincia": "Buenos Aires", "ingredientes": ["Harina", "Levadura", "Manteca", "Azúcar"] },
  { "nombre": "Tortas fritas", "categoria": "Frito", "provincia": "Entre Ríos", "ingredientes": ["Harina", "Grasa", "Sal", "Agua"] },
  { "nombre": "Merluza a la romana", "categoria": "Frito", "provincia": "Buenos Aires", "ingredientes": ["Merluza", "Harina", "Huevo", "Aceite"] },
  { "nombre": "Pizza de fugazzeta", "categoria": "Horno", "provincia": "Buenos Aires", "ingredientes": ["Harina", "Levadura", "Cebolla", "Queso"] },
  { "nombre": "Morcilla", "categoria": "Parrilla", "provincia": "Buenos Aires", "ingredientes": ["Sangre", "Cebolla", "Grasa", "Sal"] },
  { "nombre": "Salchicha parrillera", "categoria": "Parrilla", "provincia": "Buenos Aires", "ingredientes": ["Carne de cerdo", "Sal", "Ajo", "Orégano"] },
  { "nombre": "Ojo de bife", "categoria": "Parrilla", "provincia": "Buenos Aires", "ingredientes": ["Bife de costilla", "Sal", "Pimienta", "Chimichurri"] },
  { "nombre": "Matambre tiernizado", "categoria": "Parrilla", "provincia": "Buenos Aires", "ingredientes": ["Matambre", "Leche", "Ajo", "Pimienta"] }
];

const container = document.getElementById('comidaContainer');
const agregarComidaForm = document.getElementById('agregarComidaForm');
const filtroCategoria = document.getElementById('filtroCategoria');
const filtroProvincia = document.getElementById('filtroProvincia');
const busqueda = document.getElementById('busqueda');

function mostrarComidas(listaComidas) {
  container.innerHTML = '';

  listaComidas.forEach(comida => {
      const listaIngredientes = (comida.ingredientes || [])
          .map(ingrediente => `<li>${ingrediente.trim()}</li>`)
          .join('');

      container.innerHTML += `
          <div class="tarjeta">
              <h2>${comida.nombre}</h2>
              <p class="provincia">${comida.provincia}</p>
              <span class="categoria">${comida.categoria}</span>
              <ul>
                  ${listaIngredientes}
              </ul>
          </div>
      `;
  });
}

function actualizarFiltros() {
  const categoriasUnicas = [...new Set(comidas.map(comida => comida.categoria))].sort();
  const provinciasUnicas = [...new Set(comidas.map(comida => comida.provincia))].sort();

  filtroCategoria.innerHTML = '<option value="">Todas las categorías</option>';
  categoriasUnicas.forEach(categoria => {
      filtroCategoria.innerHTML += `<option value="${categoria}">${categoria}</option>`;
  });

  filtroProvincia.innerHTML = '<option value="">Todas las provincias</option>';
  provinciasUnicas.forEach(provincia => {
      filtroProvincia.innerHTML += `<option value="${provincia}">${provincia}</option>`;
  });
}

function filtrar() {
  let comidasFiltradas = comidas.filter(comida => {
      return comida.categoria.includes(filtroCategoria.value) &&
             comida.provincia.includes(filtroProvincia.value);
  });

  mostrarComidas(comidasFiltradas);
}

function buscar() {
  let comidasFiltradas = comidas.filter(comida => {
      return comida.nombre.toLowerCase().includes(busqueda.value.toLowerCase()) ||
             comida.provincia.toLowerCase().includes(busqueda.value.toLowerCase()) ||
             comida.categoria.toLowerCase().includes(busqueda.value.toLowerCase());
  });

  mostrarComidas(comidasFiltradas);
}

filtroCategoria.addEventListener("change", filtrar);
filtroProvincia.addEventListener("change", filtrar);
busqueda.addEventListener("input", buscar);

agregarComidaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombreComida').value.trim();
  const categoria = document.getElementById('categoriaComida').value.trim();
  const provincia = document.getElementById('provinciaComida').value.trim();
  const ingredientesInput = document.getElementById('ingredientesComida').value;

  const ingredientesArray = ingredientesInput
      .split(',')
      .map(item => item.trim())
      .filter(item => item !== '');

  const nuevaComida = {
      nombre: nombre,
      categoria: categoria,
      provincia: provincia,
      ingredientes: ingredientesArray
  };

  comidas.push(nuevaComida);
  
  mostrarComidas(comidas);
  actualizarFiltros();

  agregarComidaForm.reset();
});

actualizarFiltros();
mostrarComidas(comidas);