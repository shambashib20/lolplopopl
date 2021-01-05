import React from 'react'

const File_form = () => {
    return (
        <div>
            <h1>Fill the form regarding the notes upload</h1>

            <form>
  <label>
    Name : {'    '}
    <input type="text" name="name" />
  </label><br /><br />
  <label>
    Email : {'    '}
    <input type="email" name="email" />
  </label><br /><br />
  <label>
    College : {'    '}
    <input type="text" name="college" />
  </label><br /><br />
  <label>
    Subject : {'    '}
    <input type="text" name="subject" />
  </label><br /><br />
  <label>
    Topic : {'    '}
    <input type="text" name="topic" />
  </label><br /><br />
</form>
        </div>
    )
}

export default File_form
