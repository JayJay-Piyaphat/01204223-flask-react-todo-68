import './App.css'
import { useState } from 'react'
function TodoItem({ todo, toggleDone, deleteTodo, addNewComment }) {
    const [newComment, setNewComment] = useState("");

    return (
        <li>
            <span className={todo.done ? "done" : ""}>{todo.title}</span>
            <button onClick={() => { toggleDone(todo.id) }}>Toggle</button>
            <button onClick={() => { deleteTodo(todo.id) }}>❌</button>

            {todo.comments && todo.comments.length > 0 && (
                <>
                    <div>
                        <b>Comments ({todo.comments.length}):</b>
                    </div>
                    <ul>
                        {todo.comments.map(comment => (
                            <li key={comment.id}>{comment.message}</li>
                        ))}
                    </ul>
                </>
            )}
            {(!todo.comments || todo.comments.length === 0) && <p>No comments</p>}
            <div className="new-comment-forms">
                <b>Add Comment:</b>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={() => {
                    addNewComment(todo.id, newComment);
                    setNewComment("");
                }}>Add</button>
            </div>
        </li>
    )
}
export default TodoItem