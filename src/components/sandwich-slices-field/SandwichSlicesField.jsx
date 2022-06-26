import { InputField } from '../input-field';
import { useDish, useDishDispatch } from '../../context';

// SandwichSlicesField is a special case of a generic InputField component.
export default function SandwichSlicesField() {
  const { slices_of_bread, type } = useDish();
  const dispatch = useDishDispatch();

  function handleSandwichSlicesChange(slices) {
    dispatch({
      type: 'number_of_bread_slices_changed',
      numberOfSlices: slices,
    });
  }

  return (
    <>
      {type === 'sandwich' && (
        <div className="flex flex-wrap gap-1 animate-slide-from-top">
          <InputField
            label="Slices"
            id="slices_of_bread"
            type="number"
            value={slices_of_bread}
            onInputChange={handleSandwichSlicesChange}
          />
        </div>
      )}
    </>
  );
}