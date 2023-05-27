import { Fiterlable, FilterInput, BlockLable } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filtred } from 'redux/filterSlice';
import { filterSelector } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const filtarValue = ({ target }) => {
    dispatch(filtred(target.value));
  };

  return (
    <BlockLable>
      <Fiterlable htmlFor="filter">Find contacts by name</Fiterlable>
      <FilterInput
        type="text"
        value={filter}
        onChange={filtarValue}
        id="filter"
      />
    </BlockLable>
  );
};
export default Filter;
