import { useState } from 'react';

//Başka bir jsx'e onCreate, task, taskformUpdate ve onUpdate gönderir
//4 tane prop alır.
function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  //Eğer task varsa task.title kullanılır. Task yoksa boş bırakılır.
  const [title, setTitle] = useState(task ? task.title : '');
  //Eğer task varsa task.taskDesc kullanılır. Task yoksa boş bırakılır.
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  //Başlığa girilen kısmı mevcut başlıkla değiştirir.
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  //Açıklamaya girilen kısmı mevcut açıklamayla değiştirir.
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //taskformUpdate'in durumuna göre, güncelleme mi oluşturma mı olduğunu seçer.
    if (taskformUpdate) {
      //Güncellenmesi gereken taskın id'si, başlığı, description'unu onUpdate'e gönderir.
      onUpdate(task.id, title, taskDesc);
    } else {
      //Oluşturulcak taskın başlığı ve description'unu onCreate'e gönderir.
      onCreate(title, taskDesc);
    }
      //Form gönderildikten sonra alanların temizlenmesini sağlar.
    setTitle('');
    setTaskDesc('');
  };

  return (
    <div>
      {' '}
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
