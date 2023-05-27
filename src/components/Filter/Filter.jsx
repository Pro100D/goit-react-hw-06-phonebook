import { Fiterlable, FilterInput, BlockLable } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filtred } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.filterValue);

  const filtarValue = evt => {
    dispatch(filtred(evt.target.value));
  };

  return (
    <BlockLable>
      <Fiterlable htmlFor="filter">Find contacts by name</Fiterlable>
      <FilterInput
        type="text"
        value={selector}
        onChange={filtarValue}
        id="filter"
      />
    </BlockLable>
  );
};
export default Filter;
