interface ErrorProps {
    message: string | null;
  }
  
  const Error = ({ message }: ErrorProps) => {

    if (!message) return null;
  
    return (
      <div className="absolute top-50% left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-2 rounded">
        {message}
      </div>
    );
  };
  
  export default Error;
  