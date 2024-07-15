## this is the hosted link for the project: https://tranquil-cascaron-bf96b4.netlify.app/

## 1. Main App Component (AppComponent)

This component manages the overall navigation and state of the multi-step form. It uses Angular forms for validation and has methods for handling the selection of plans and add-ons, as well as navigating between steps.

Key Features:
Form Handling: Uses reactive forms (FormGroup) for managing user input and validation.
Step Navigation: Methods to navigate between steps (nextStep, previousStep).
State Management: Holds the current step, selected plan, and selected add-ons in its state.

## 2. Navigation Component (NavigationComponent)

This component provides the UI for navigation through the steps of the form. It displays the current step and allows users to click to navigate directly to a specific step, if enabled.

Key Features:
Input Properties: Receives the current step and whether navigation is disabled as inputs.
Output Event: Emits an event when a step is clicked to change the step in the main component.

## 3. Select Plan Component (SelectPlanComponent)

This component is responsible for the "Select Plan" step of the form. It displays different plan options and allows the user to select one.

Key Features:
Plan Selection: Methods to select a plan and toggle between monthly and yearly billing.
Input Properties: Receives the current step and selected plan.
Output Events: Emits events when a plan is selected, or the user wants to navigate to the next or previous step.

## 4. Pick Add-Ons Component (PickAddOnsComponent)

This component handles the "Pick Add-Ons" step of the form. It allows users to select additional features or services.

Key Features:
Add-On Selection: Methods to toggle the selection of add-ons.
Input Properties: Receives the current step, selected plan, and selected add-ons.
Output Events: Emits events for selected add-ons and step navigation.

## 5. HTML Templates

The HTML templates for these components use Tailwind CSS for styling and provide the structure for the multi-step form. They include:

Conditional Rendering: Showing and hiding components based on the current step.
Responsive Design: Classes to ensure the layout adapts to different screen sizes.
User Interaction: Click handlers for navigating between steps and selecting plans/add-ons.

## Features

- Multi-step form navigation:
  - Home
  - Select Plan
  - Pick Add-ons
  - Finishing Up
  - Thank You
- Form validation:
  - Name (only letters and spaces, minimum 3 characters)
  - Email (valid email format)
  - Phone Number (only numbers, minimum 3 digits)
- Real-time validation with debounce and distinct checks.
- Dynamic plan and add-on selection.
