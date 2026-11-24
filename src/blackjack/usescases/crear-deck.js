import _ from "underscore";

// export const miNombre = "Cris";

/**
 *
 * @param {Array<String>} tiposDeCarta EJEMEPLO: ["C", "D", "H", "S"]
 * @param {Array<String>} tipoEspeciales EJEMEPLO: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tipoEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("TiposDeCarta tiene que ser un arreglo de string");

  if (!tipoEspeciales || tipoEspeciales.length === 0)
    throw new Error("tiposEspeciales tiene que ser un arreglo de string");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tipoEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};
