import { render, screen, fireEvent } from "@testing-library/svelte"
import type { ItemInterface } from "@/models/items/Item.interface"
import ItemComponent from "./Item.component.svelte"

describe("Item.component:behavior", () => {
  it("renders an Item test correctly", async () => {
    const item: ItemInterface = {
      id: 1,
      name: "Unit test item 1",
      selected: false,
    }

    const testid = "unit-test-behavior-2"
    const { component } = render(ItemComponent, {
      testid,
      item,
    })

    const liElement = screen.getByTestId(testid)
    const mockOnItemSelect = vitest.fn()
    component.$on("selectItem", mockOnItemSelect)
    await fireEvent.click(liElement)
    expect(mockOnItemSelect).toHaveBeenCalledTimes(1)
  })
})
