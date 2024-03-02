import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../App";
import RecipeData from "../RecipeData";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect'

describe("App", () => {
  describe("includes necessary structure to create a recipe", () => {
    
    test('a form with name="create"', () => {
      const { container } = render(<App />);
      expect(container.querySelector('form[name="create" i]')).toBeTruthy();
    });

    describe("create form contains", () => {
      test('an <input name="name">', () => {
        const { container } = render(<App />);
        const name = container.querySelector(
          'form[name="create" i] input[name="name" i]'
        );
        expect(name).toBeTruthy();
      });

      test('an <input name="cuisine">', () => {
        const { container } = render(<App />);
        const name = container.querySelector(
          'form[name="create" i] input[name="cuisine" i]'
        );
        expect(name).toBeTruthy();
      });
      
      test('an <input name="photo">', () => {
        const { container } = render(<App />);
        const name = container.querySelector(
          'form[name="create" i] input[name="photo" i]'
        );
        expect(name).toBeTruthy();
      });
      
      test('a <textarea name="ingredients">', () => {
        const { container } = render(<App />);
        const textArea = container.querySelector(
          'form[name="create" i] textarea[name="ingredients" i]'
        );
        expect(textArea).toBeTruthy();
      });
      
      test('a <textarea name="preparation">', () => {
        const { container } = render(<App />);
        const textArea = container.querySelector(
          'form[name="create" i] textarea[name="preparation" i]'
        );
        expect(textArea).toBeTruthy();
      });
      
      test('a <button type="submit">', () => {
        const { container } = render(<App />);
        const selectbutton = container.querySelector(
          'form[name="create" i] button[type="submit" i]'
        );
        expect(selectbutton).toBeTruthy();
      });
    }); 
  });
  
  describe("can create a new recipe that displays", () => {

    beforeEach(() => {
      const { container } = render(<App />);
      
      const name = container.querySelector(
        'form[name="create" i] input[name="name" i]'
      );
      const photo = container.querySelector(
        'form[name="create" i] input[name="photo" i]'
      );
      const cuisine = container.querySelector(
        'form[name="create" i] input[name="cuisine" i]'
      );
      const ingredients = container.querySelector(
        'form[name="create" i] textarea[name="ingredients" i]'
      );
      const preparation = container.querySelector(
        'form[name="create" i] textarea[name="preparation" i]'
      );
      fireEvent.change(name, { target: { value: "Just an avocado" } });
      fireEvent.change(cuisine, { target: { value: "Raw Food" } });
      fireEvent.change(photo, { target: { value: "http://www.nopicavailable.com" } });
      fireEvent.change(ingredients, { target: { value: "1 avocado" } });
      fireEvent.change(preparation, { target: { value: "peel the avocado" } });

      const submitButton = container.querySelector(
        'form[name="create" i] button[type="submit" i]'
      );
      fireEvent(
        submitButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
    
    test("the name", () => {
      expect(screen.queryByText("Just an avocado")).toBeInTheDocument();
    });
    
    test("the cuisine", () => {
      expect(screen.queryByText("Raw Food")).toBeInTheDocument();
    });
    
    test("the photo", () => {
      expect(screen.getAllByRole('img')[2]).toHaveAttribute('src', 'http://www.nopicavailable.com');
    });
    
    test("the ingredients", () => {
      expect(screen.queryByText("1 avocado")).toBeInTheDocument();
    });
    
    test("the preparation", () => {
      expect(screen.queryByText("peel the avocado")).toBeInTheDocument();
    });
  });

  describe("loads and displays data in RecipeData.js correctly", () => {
    test("table has thead", () => {
      const { container } = render(<App />);
      const thead = container.querySelector('table thead th');
      expect(thead).toBeTruthy();
    });
    
    test("table has tbody", () => {
      const { container } = render(<App />);
      const tbody = container.querySelector('table tbody tr');
      expect(tbody).toBeTruthy();
    });

    test("Tuna Poke with Mango is displayed in the first row", () => {
      const { container } = render(<App />);
      const row = container.querySelector('table tbody tr');
      const content = within(row);
      expect(content.getByText(RecipeData[0]["name"])).toBeInTheDocument();             expect(content.getByText(RecipeData[0]["cuisine"])).toBeInTheDocument();
      expect(content.getByRole('img')).toHaveAttribute('src', RecipeData[0]["photo"]);
      expect(content.getByText(RecipeData[0]["ingredients"])).toBeInTheDocument();
      expect(content.getByText(RecipeData[0]["preparation"])).toBeInTheDocument();
    });

    test("delete button with name='delete' is displayed", () => {
      const { container } = render(<App />);
      const deleteButton = container.querySelector(
        'table tbody td button[name="delete" i]'
      );
       expect(deleteButton).toBeTruthy();
    });
    
  });

describe("deletes", () => {
    test("recipe is deleted when the delete button is clicked", () => {
      const { container } = render(<App />);
      const row = container.querySelector('table tbody tr');
      const content = within(row);
      expect(content.getByText(/Tuna Poke with Mango/)).toBeInTheDocument();
      const deleteButton = content.getByText(/delete/i);
      fireEvent(
        deleteButton,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
      const newRow = container.querySelector('table tbody tr');
      const newContent = within(newRow);
      expect(newContent.queryByText(/Tuna Poke with Mango/)).toBeNull();
    });
  });
});