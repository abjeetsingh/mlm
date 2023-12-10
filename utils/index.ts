import { CarProps, FilterProps } from "@types";

const basePricePerDay = 50; // Base rental price per day in dollars
const mileageFactor = 0.1; // Additional rate per mile driven
const ageFactor = 0.05; // Additional rate per year of vehicle age

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": "c40a2a4826msh4c07d68ddb06af6p148f34jsn3603f1c46430",
    "X-RapidAPI-Host": "car-api2.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  console.log(result);
  return result;
}
