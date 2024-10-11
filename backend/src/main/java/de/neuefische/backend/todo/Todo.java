package de.neuefische.backend.todo;

public record Todo(
        String id,
        String title,
        String description,
        TodoStatus status
) {

    Todo(
            String description,
            String title,
            TodoStatus status
    ) {
        this(null, title,description, status);
    }


    public Todo withId(String id) {
        return new Todo(id, title,description, status);
    }
}
