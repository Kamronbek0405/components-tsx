import  { useState } from 'react';
import { Button } from "./components/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./components/input";
import { Select } from './components/select';


interface FormData {
  name: string;
  description: string;
  age: number;
  category: string; 
}

function App() {
  const [dataList, setDataList] = useState<FormData[]>([]);
  const { handleSubmit, register, reset, setValue, getValues } = useForm<FormData>();

  
  const submit: SubmitHandler<FormData> = (data) => {
    
    setDataList(prevDataList => [...prevDataList, data]);

   
    reset();
  };

  const deleteItem = (index: number) => {
    setDataList(prevDataList => prevDataList.filter((_, i) => i !== index));
  };

  const editItem = (index: number) => {
    const item = dataList[index];
    
    const newName = prompt("Edit Name", item.name) || item.name;
    const newDescription = prompt("Edit Description", item.description) || item.description;
    
    let newAge: number;
    let inputAge: string | null;
    
    do {
      inputAge = prompt("Edit Age", item.age.toString());
      
      if (inputAge === null) {
        return; 
      }
      
      newAge = Number(inputAge);
      
      if (isNaN(newAge)) {
        alert("Iltimos, haqiqiy son kiriting.");
      }
    } while (isNaN(newAge));
    
    setDataList(prevDataList =>
      prevDataList.map((item, i) =>
        i === index ? { name: newName, description: newDescription, age: newAge, category: item.category } : item
      )
    );
  };

 
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-three-color-gradient">
      <form 
        onSubmit={(e) => {
          e.preventDefault(); 
          handleSubmit(submit)(); 
        }}
        className="flex flex-col gap-4 w-[500px] h-[400px] bg-white rounded-xl border-2 border-gray-300 shadow-lg shadow-gray-400 items-center justify-center"
      >
        <Input
          register={register}
          type="text"
          name="name"
          className="w-[320px] h-[50px] outline-gray-400 border-2 border-blue-500 rounded-full px-3 shadow-lg shadow-blue-200 hover:shadow-md"
          placeholder="Name"
        />
        <Input
          register={register}
          type="text"
          name="description"
          className="w-[320px] h-[50px] outline-gray-400 border-2 shadow-lg shadow-blue-200 hover:shadow-md border-blue-500 rounded-full px-3"
          placeholder="Description"
        />
        <Input
          register={register}
          type="number"
          name="age"
          className="w-[320px] h-[50px] outline-gray-400 border-2 shadow-lg shadow-blue-200 hover:shadow-md border-blue-500 rounded-full px-3"
          placeholder="Age"
        />
        <Select
          options={categories}
          value={getValues('category')}
          onChange={(e) => setValue('category', e.target.value)}
          className="w-[320px] h-[50px] outline-2 outline-gray-400 border-2 border-blue-500 rounded-full px-3 shadow-lg shadow-blue-200"
        />
        <Button
          type="submit"
          className="w-[320px] h-[50px] bg-blue-500 text-white text-lg hover:text-blue-500 hover:bg-transparent hover:border-2 hover:border-blue-500 transition-all rounded-full px-3"
        >
          Submit
        </Button>
      </form>

     
      <div className="mt-5">
        {dataList.map((item, index) => (
          <div key={index} className="w-[450px] h-[200px] px-5 py-3 shadow-lg bg-white shadow-gray-400 border-2 border-gray-200 mt-4">
            <h1><span className='font-medium'>Name:</span> {item.name}</h1>
            <p><span className='font-medium'>Description:</span> {item.description}</p>
            <p><span className='font-medium'>Age:</span> {item.age}</p>
            <p><span className='font-medium'>Category:</span> {item.category}</p>
            <div className='mt-3'>
              <Button className='w-[120px] h-[50px] bg-red-500 rounded-lg text-white text-lg hover:shadow-red-500 hover:shadow-lg transition-all' onClick={() => deleteItem(index)} type='button'>delete</Button>
              <Button type='button' onClick={() => editItem(index)} className='w-[120px] h-[50px] font-medium text-white text-lg rounded-lg hover:shadow-lg hover:shadow-green-500 bg-green-500 ml-5'>edit</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
