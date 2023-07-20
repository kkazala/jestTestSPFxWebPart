import '@testing-library/jest-dom';
import { RenderResult, render, screen } from '@testing-library/react';
import React from "react";
import HelloWorld from "../../src/webparts/helloWorld/components/HelloWorld";

describe("HelloWorld.tsx", () => {
    it("should render correctly", async () => {

        let helloWorld: RenderResult =  render(<HelloWorld  description="" isDarkTheme={false} environmentMessage="" hasTeamsContext={false} userDisplayName="" />);
        expect(helloWorld.getByTestId('helloWorld')).toBeInTheDocument();

        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(7);
    });
});


