export type FindWeatherType = {
  DateSelected?: Date;
  weatherDescription?: number;
};

export const FutureWeatherBackground = ({
  DateSelected,
  weatherDescription,
}: FindWeatherType) => {
  const backgroundString =
    "w-96 h-44 flex flex-row flex-wrap self-center justify-between rounded-xl shadow-md";
  const dateHour = DateSelected!.getHours();
  if (dateHour >= 17 || dateHour < 6) {
    if (weatherDescription === 800) {
      return `bg-gradient-to-tr from-indigo-800 to-indigo-50 ${backgroundString}`;
    } else if (
      weatherDescription === 200 ||
      weatherDescription === 201 ||
      weatherDescription === 202 ||
      weatherDescription === 210 ||
      weatherDescription === 211 ||
      weatherDescription === 212 ||
      weatherDescription === 221 ||
      weatherDescription === 230 ||
      weatherDescription === 231 ||
      weatherDescription === 232
    ) {
      return `bg-gradient-to-tr from-gray-300 to-gray-500 ${backgroundString}`;
    } else if (
      weatherDescription === 300 ||
      weatherDescription === 301 ||
      weatherDescription === 302 ||
      weatherDescription === 310 ||
      weatherDescription === 311 ||
      weatherDescription === 312 ||
      weatherDescription === 313 ||
      weatherDescription === 314 ||
      weatherDescription === 321 ||
      weatherDescription === 520 ||
      weatherDescription === 521 ||
      weatherDescription === 522 ||
      weatherDescription === 531
    ) {
      return `bg-gradient-to-tr from-gray-50 to-gray-400 ${backgroundString}`;
    } else if (
      weatherDescription === 511 ||
      weatherDescription === 600 ||
      weatherDescription === 601 ||
      weatherDescription === 602 ||
      weatherDescription === 611 ||
      weatherDescription === 612 ||
      weatherDescription === 613 ||
      weatherDescription === 615 ||
      weatherDescription === 616 ||
      weatherDescription === 620 ||
      weatherDescription === 621 ||
      weatherDescription === 622
    ) {
      return `bg-gradient-to-tr from-gray-50 to-gray-200 ${backgroundString}`;
    } else if (
      weatherDescription === 701 ||
      weatherDescription === 711 ||
      weatherDescription === 721 ||
      weatherDescription === 731 ||
      weatherDescription === 741 ||
      weatherDescription === 751 ||
      weatherDescription === 761 ||
      weatherDescription === 762 ||
      weatherDescription === 771 ||
      weatherDescription === 781
    ) {
      return `bg-gradient-to-tr from-gray-50 to-gray-100 ${backgroundString}`;
    } else if (
      weatherDescription === 801 ||
      weatherDescription === 802 ||
      weatherDescription === 803 ||
      weatherDescription === 804
    ) {
      return `bg-gradient-to-tr from-indigo-500 to-indigo-50 ${backgroundString}`;
    }
  } else {
    if (weatherDescription === 800) {
      return `bg-gradient-to-tr from-blue-500 to-blue-50 ${backgroundString}`;
    } else if (
      weatherDescription === 200 ||
      weatherDescription === 201 ||
      weatherDescription === 202 ||
      weatherDescription === 210 ||
      weatherDescription === 211 ||
      weatherDescription === 212 ||
      weatherDescription === 221 ||
      weatherDescription === 230 ||
      weatherDescription === 231 ||
      weatherDescription === 232
    ) {
      return `bg-gradient-to-tr from-gray-300 to-gray-500 ${backgroundString}`;
    } else if (
      weatherDescription === 300 ||
      weatherDescription === 301 ||
      weatherDescription === 302 ||
      weatherDescription === 310 ||
      weatherDescription === 311 ||
      weatherDescription === 312 ||
      weatherDescription === 313 ||
      weatherDescription === 314 ||
      weatherDescription === 321 ||
      weatherDescription === 500 ||
      weatherDescription === 501 ||
      weatherDescription === 502 ||
      weatherDescription === 503 ||
      weatherDescription === 504 ||
      weatherDescription === 520 ||
      weatherDescription === 521 ||
      weatherDescription === 522 ||
      weatherDescription === 531
    ) {
      return `bg-gradient-to-tr from-gray-50 to-gray-400${backgroundString}`;
    } else if (
      weatherDescription === 511 ||
      weatherDescription === 600 ||
      weatherDescription === 601 ||
      weatherDescription === 602 ||
      weatherDescription === 611 ||
      weatherDescription === 612 ||
      weatherDescription === 613 ||
      weatherDescription === 615 ||
      weatherDescription === 616 ||
      weatherDescription === 620 ||
      weatherDescription === 621 ||
      weatherDescription === 622
    ) {
      return `bg-gradient-to-tr from-gray-50 to-gray-200 ${backgroundString}`;
    } else if (
      weatherDescription === 701 ||
      weatherDescription === 711 ||
      weatherDescription === 721 ||
      weatherDescription === 731 ||
      weatherDescription === 741 ||
      weatherDescription === 751 ||
      weatherDescription === 761 ||
      weatherDescription === 762 ||
      weatherDescription === 771 ||
      weatherDescription === 781
    ) {
      return `bg-gradient-to-tr from-gray-50 to-gray-100 ${backgroundString}`;
    } else if (
      weatherDescription === 801 ||
      weatherDescription === 802 ||
      weatherDescription === 803 ||
      weatherDescription === 804
    ) {
      return `bg-gradient-to-tr from-blue-500 to-blue-50 ${backgroundString}`;
    }
  }
};
