function AddTodo() {
  return (
    <div class="container ">
      <div class="row aj-row">
        <div class="col-6">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div class="col-4"><input type="date" /></div>
        <div class="col-2"><button type="button" class="btn btn-success aj-btn">Add</button></div>
      </div>
    </div>
  )
}

export default AddTodo;