export const Task = ({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}) => {
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const doneBtnOnClick = () => {
      toggleDoneTaskFunc(id)
    }
  
    const isCompleteOK  = completed ? "text-decoration-line-through":" "
    
    return (
      <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span class={isCompleteOK}>{title}</span>
      <button className="btn btn-success" onClick={doneBtnOnClick}>Done</button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
};
