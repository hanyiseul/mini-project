type InputProps = {
  id?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'radio' | 'date';
  disabled?: boolean;
  onClick?: () => void;
};

export function Input({
  id,
  placeholder = '업무를 입력하세요',
  type = 'text',
  disabled = false,
  onClick,
}: InputProps) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onClick={onClick}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
}
