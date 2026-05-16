export function filterCars(
  cars,
  keyword,
  brand
){

  return cars.filter(car => {

    const matchKeyword =
    car.name
    .toLowerCase()
    .includes(keyword.toLowerCase())

    const matchBrand =
    brand === 'all' ||
    car.brand === brand

    return matchKeyword && matchBrand

  })

}