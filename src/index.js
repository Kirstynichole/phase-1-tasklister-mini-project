document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", event => {
    event.preventDefault();
    const button = document.createElement("button");
    button.textContent = ("x");
    const li = document.createElement("li");
    tasks.append(li);
    li.textContent = event.target["new-task-description"].value;
    li.append(button);

      const priority = document.querySelector("select").value;
      
      if (priority === "high") li.style.color = "red";
      if (priority === "medium") li.style.color = "yellow";
      if (priority === "low") li.style.color = "green";
      

    button.addEventListener("click", (event) => {
      li.remove()
    })

   
    })
    // const button = document.createElement("button");
    // button.textContent = ("x");
    // document.querySelector("li.").append(button);
    // document.querySelector("button").addEventListener("click", event ==> {
    //   remove(li),
    // })
  });
