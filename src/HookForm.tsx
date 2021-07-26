import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.number()
});

export function HookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: any) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <span>This field is required</span>}

      <input defaultValue="test" {...register('surname')} />
      {errors.surname && <span>number</span>}

      <input type="submit" />
    </form>
  );
}
