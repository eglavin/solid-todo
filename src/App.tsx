import { Component, createSignal } from "solid-js";

export const App: Component = () => {
  const [todoList, setTodoList] = createSignal<string[]>([
    "Apple",
    "Orange",
    "Banana",
  ]);

  return (
    <div class="flex flex-col px-4 text-gray-900">
      <div class="my-2">
        <h1 class="font-medium">Todo List</h1>

        <ul class="list-disc mx-6">
          {todoList().length ? (
            todoList().map((todo, todoIndex) => {
              return (
                <li class="p-0.5">
                  <div class="flex items-center">
                    <p class="pr-2">{todo}</p>

                    <button
                      class="ring-1 ring-inset ring-gray-300 hover:bg-blue-700 hover:text-white py-1 px-4 rounded-md"
                      onClick={() => {
                        setTodoList((prev) => {
                          prev.splice(todoIndex, 1);
                          return prev.concat([]);
                        });
                      }}
                    >
                      X Remove
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <div>Add a todo below!</div>
          )}
        </ul>
      </div>

      <div class="my-2">
        <form
          onSubmit={(event) => {
            event.preventDefault();

            const input = event.currentTarget.elements.namedItem(
              "todo-input"
            ) as HTMLInputElement;

            if (input?.value) {
              setTodoList((prev) => prev.concat(input.value));
              input.value = "";
            }
          }}
        >
          <label for="todo-input" class="font-medium">
            Todo Input
          </label>

          <div class="flex items-center gap-4 mt-2">
            <input
              class="rounded-md border-0 py-2 px-4 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500"
              id="todo-input"
              name="todo-input"
              type="text"
            />

            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              type="submit"
            >
              + Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
