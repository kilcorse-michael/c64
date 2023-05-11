import classnames from "classnames";
import { useState } from "react";

function getCheckboxClasses(checked: boolean) {
  return classnames(
    "inline-block",
    "w-6",
    "h-6",
    "bg-white",
    "border",
    "rounded-sm",
    "transition-all",
    "duration-300",
    !checked ? "border-red-400": "border-green-400",
  );
}


function MyCheckbox() {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className={getCheckboxClasses(checked)}
      />
      <span className="font-family text-gray-700">{checked ? "Checked" : "Unchecked"}</span>
    </label>
  );
}

export default MyCheckbox;