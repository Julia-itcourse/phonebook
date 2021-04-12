import { TextField } from "@material-ui/core";

const Filter = ({value, onChangeFilter}) =>{
return(
    <div>
    <TextField
      id="outlined-basic"
      label="Filter"
      variant="outlined"
      type="text"
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </div>
)
}
 
export default Filter;