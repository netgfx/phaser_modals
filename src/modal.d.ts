declare class gameModal
{
    /**The library pass the game object as an argument and store it to a variable*/
    constructor(game: any);

    /**
    *The function to create a modal, takes an object with the modal properties as an argument
    @param options General Options:
    *- type: This is the name of the modal, which we use to identify it
    *- includeBackground: This toggles the modal background on or off (default off)
    *- backgroundColor: This is the modal background color (default 0x000000)
    *- backgroundOpacity: This sets the modal background opacity (default: 0.7)
    *- modalCloseOnInput: If we want the modal to close when we click on the background (default off)*/
    createModal(options: any): void;

    /**The function to show a previously created modal, takes the modal name/type as an argument*/
    showModal(type: any): void;

    /**The function to hide a previously created and shown modal, takes the modal name/type as an argument*/
    hideModal(type: any): void;

    /**The function to get an element from a previously created modal, takes the modal name/type and the position of the element (index) as an argument*/
    getModalItem(type: any, index: any): any;

    /**Remove a previously created modal from the registry*/
    destroyModal(type: any): void;

    /**Dynamically change the value of an element inside a modal, takes the modal name/type, the changed value, and the index of the element as arguments (experimental function)*/
    updateModalValue(value: any, type: any, index: any, id: any): any;
}