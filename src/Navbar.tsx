import { SelectedDateType } from "./App";
import { forecast, current } from "./routes";
import { Link } from "react-router-dom";

export type navBarConfig = {
  zipcode?: number;
  selectedDate?: SelectedDateType;
  setSelectedDate?: React.Dispatch<React.SetStateAction<SelectedDateType>>;
  setZipcode?: (Zipcode: number) => void;
};

export default function Navbar({
  zipcode,
  selectedDate,
  setSelectedDate,
  setZipcode,
}: navBarConfig) {
  const handleChange = (event: any) => {
    const { value } = event.target;
    setZipcode?.(value);
  };

  const handleDateChange = (event: any) => {
    const { value, type, checked, name } = event.target;
    setSelectedDate?.((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : new Date(value),
      };
    });
  };

  return (
    <main className="w-full h-20 flex justify-center items-center bg-red-100">
      <form className="flex w-full flex-row justify-between">
        <div className="w-1/3 flex flex-col">
          <label>Enter Zip: </label>
          <input
            className="w-5/12 text-center shadow-lg border-2 border-primary-100"
            value={zipcode}
            name="zipcode"
            pattern="[0-9]*"
            minLength={5}
            maxLength={5}
            placeholder="Enter zipcode number"
            type="tel"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            required
            onChange={(event) => handleChange(event)}
          />
        </div>

        <div
          className={
            selectedDate?.currentDateCheck
              ? "flex flex-row w-1/2 mr-3 justify-end"
              : "flex flex-row w-1/12  mr-3 justify-end"
          }
        >
          {selectedDate?.currentDateCheck ? (
            <div className="flex flex-col">
              <label>Enter Date</label>
              <input
                type="datetime-local"
                name="dateSelected"
                onChange={(event) => handleDateChange(event)}
                required
              />
            </div>
          ) : null}

          <Link to={selectedDate?.currentDateCheck ? current : forecast}>
            <button
              className={selectedDate?.currentDateCheck ? "" : "w-1/5"}
              onClick={() =>
                setSelectedDate?.((prevState) => {
                  return {
                    ...prevState,
                    currentDateCheck: !prevState.currentDateCheck,
                  };
                })
              }
            >
              {selectedDate?.currentDateCheck
                ? "Current forecast"
                : "Future forecast"}
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
}
