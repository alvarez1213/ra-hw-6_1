import "./form.css";

export const Form = ({ handleFormData }) => {
  const availableTitles = ['London', 'Tokyo', 'Moscow', 'New York']

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target[0].value
    console.log(title)
    const timeZone = Number(e.target[1].value)
    console.log(timeZone)
    e.target[1].value = ''

    handleFormData({ title: title, timeZone: timeZone })
  };

  return (
    <form className="form" autoComplete="false" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Название</label>
        <select name="title" id="title">
          {availableTitles.map((title) => (
            <option value={title}>{title}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="time-zone">Временная зона (UTC)</label>
        <input type="number" id="time-zone" name="time-zone" min={-12} max={14} step={1} required />
      </div>
      <button className="btn" type="submit">
        Добавить
      </button>
    </form>
  );
};

