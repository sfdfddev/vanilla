/**
 * @author Adam (charrondev) Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { ensureHtmlElement, mountReact } from "@library/dom/domUtils";
import { LegacyEditor } from "@rich-editor/editor/LegacyEditor";
import React from "react";

/**
 * Mount the editor into a DOM Node.
 *
 * @param containerSelector - The CSS selector or the HTML Element to render into.
 */
export default function mountEditor(containerSelector: string | Element) {
    const container = ensureHtmlElement(containerSelector);
    const bodybox = container.closest("form")!.querySelector(".BodyBox");

    if (!bodybox) {
        throw new Error("Could not find the BodyBox to mount editor to.");
    }

    const initialFormat = bodybox.getAttribute("format") || "Rich";

    if (initialFormat === "Rich") {
        mountReact(<LegacyEditor legacyTextArea={bodybox as HTMLInputElement} />, container, () => {
            container.classList.remove("isDisabled");
        });
    } else {
        throw new Error(`Unsupported initial editor format ${initialFormat}`);
    }
}
