import {useState} from "react";
import "./App.css"


function App(){
  const [title,setTitle]=useState("")
  const [note,setNote]= useState("")
  const[notes,setNotes]=useState([
    {
    title: 'college work', note:"complete react assignment and submit the project on time"
    },

   {
      title: 'Study plan', note:"Revise Javascript and Practice React concepts everyday"
    },
      
    
      {
      title: 'shopping List', note:"Buy notebooks,pens,pencils, and other stationery items"
    },
{
    title: 'Daily Goals', note:" Wake up early ,complete pending tasks and learn something new "
    },

   {
      title: 'Personal remainder', note:"organize study materials and prepare for upcoming exams"
    },
      
    
      {
      title: 'My Dreams', note:"I want to make my dreams come true.I will work hard,i learn from my mistakes and never compare my journey with others."
    },





    
  ])

  function addNote(){
    if (title ==="" || note ==="")
      {
        return;
    }

    setNotes([...notes,{title:title, note:note}])
    setTitle("")
    setNote("")
  }
    function deleteNote(index){
      const newNotes= notes.filter((item,i) => i !== index)
      setNotes(newNotes)
    }

    function editNote(index){
      const newTitle =prompt("edit title",notes[index].title)

      if (newTitle !== null && newTitle.trim() !==""){
        const newNotes =[...notes]
        newNotes[index].title= newTitle
        setNotes(newNotes)
      }
    }

    return(
      <div className="notes-app">
        <h1>My Notes</h1>
        <h2>A home for your thoughts</h2>
        <input type="text"  placeholder="Note Title" value={title } onChange={(e) => setTitle(e.target.value)}/>

        <textarea placeholder="Write your note" value={note} onChange={(e) => setNote(e.target.value)}/>

          <button onClick={addNote}>add Note</button>

           <div className="notes-list">
          {notes.map((item,index) => (
            <div className="note">
              <h3>{item.title}</h3>
              <p>{item.note}</p>

              <button onClick={() =>editNote(index)}>Edit</button>
             <button onClick={() =>deleteNote(index)}>Delete</button>

            </div>
          ))}
          </div>
  </div>
        
    )
}

export default App;