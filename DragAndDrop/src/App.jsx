import { useState } from "react";

const headingArr = ["Todo", "Doing", "Done"];

const App = () => {
  const [drag, setDragTask] = useState(null);
  const [todo, setTodo] = useState([
    {
      type: "Done",
      title: "Okay",
    },
    {
      type: "Doing",
      title: "Demo",
    },
    {
      type: "Todo",
      title: "hmmm",
    },
  ]);

  const handleDragNdDrop = (title) => {
    let copyTasks = [...todo];

    copyTasks = copyTasks.map((item) => {
      if (item?.title === drag?.title) {
        return { ...item, type: title };
      }
      return item;
    });

    setTodo([...copyTasks]);
  };

  return (
    <div className="flex flex-col gap-8 items-center mt-10">
      <h1 className="text-4xl font-bold">Task Manager</h1>
      <input type="text" className="outline-none border-2 py-2 px-6" />
      <div className="flex gap-10">
        {headingArr.map((title) => {
          return (
            <div
              key={title}
              onDrop={() => handleDragNdDrop(title)}
              onDragOver={(e) => e.preventDefault()}
            >
              <h1>{title}</h1>
              <div className="flex flex-col">
                {todo.map((item, idx1) => {
                  if (item?.type === title) {
                    return (
                      <p
                        onDrag={() => {
                          setDragTask(item);
                        }}
                        draggable
                        key={idx1}
                      >
                        {item?.title}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
