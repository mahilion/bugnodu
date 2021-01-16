package com.mahilion.rest.bugtracker.entity;

public class Helloworld {
    private String m_message;

    public Helloworld(String message) {
        m_message = message;
    }

    public String getMessage() {
        return m_message;
    }

    public void setMessage(String message) {
        m_message = message;
    }

    @Override
    public String toString() {
        return "Helloworld{" +
                "m_message='" + m_message + '\'' +
                '}';
    }
}
