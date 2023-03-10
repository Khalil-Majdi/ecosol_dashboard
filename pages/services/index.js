import React, { useRef } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TabView, TabPanel } from 'primereact/tabview';
import { Panel } from 'primereact/panel';
import { Fieldset } from 'primereact/fieldset';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Password } from 'primereact/password';
import { Menu } from 'primereact/menu';

const PanelDemo = () => {
    const menu1 = useRef(null);
    const toolbarItems = [
        {
            label: 'Save',
            icon: 'pi pi-check'
        },
        {
            label: 'Update',
            icon: 'pi pi-sync'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            label: 'Home Page',
            icon: 'pi pi-home'
        }
    ];

    const toolbarLeftTemplate = () => {
        return (
            <>
                <Button label="New" icon="pi pi-plus" style={{ marginRight: '.5em' }} />
                <Button label="Open" icon="pi pi-folder-open" className="p-button-secondary" />

                <i className="pi pi-bars p-toolbar-separator" style={{ marginRight: '.5em' }}></i>

                <Button icon="pi pi-check" className="p-button-success" style={{ marginRight: '.5em' }} />
                <Button icon="pi pi-trash" className="p-button-warning" style={{ marginRight: '.5em' }} />
                <Button icon="pi pi-print" className="p-button-danger" />
            </>
        );
    };
    const toolbarRightTemplate = <SplitButton label="Options" icon="pi pi-check" model={toolbarItems} menuStyle={{ width: '12rem' }}></SplitButton>;
    const cardHeader = (
        <div className="flex align-items-center justify-content-between mb-0 p-3 pb-0">
            <h5 className="m-0">Card</h5>
            <Button icon="pi pi-plus" className="p-button-text" onClick={(event) => menu1.current.toggle(event)} />
            <Menu
                ref={menu1}
                popup
                model={[
                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                    { label: 'Remove', icon: 'pi pi-fw pi-minus' },
                    { label: 'Update', icon: 'pi pi-fw pi-sync' }
                ]}
            />
        </div>
    );

    return (
        <div className="grid">
                <div className="card col-12 md:col-6 	 ">
                    <Fieldset legend="Ing??nierie " toggleable>
                    <img src={`/demo/images/ing??nieurie.jpg`} className="w-6"  />
                        <p className="text-gray-800 sm:line-height-2 md:line-height-4 text-xl mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Fieldset>
                    <Button label="Supprimer" className="p-button-danger m-4" />
                    <Button label="Modifier" className="m-4"/>
                </div>

                <div className="card col-12 md:col-6">
                    <Fieldset legend="Ex??cution  " toggleable>
                    <img src={`/demo/images/ex??cution.jpg`} className="w-6"  />
                        <p className="text-gray-800 sm:line-height-2 md:line-height-4 text-xl mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Fieldset>
                    <Button label="Supprimer" className="p-button-danger m-4 " />
                    <Button label="Modifier" className="m-4"/>
                </div>

                <div className="card col-12 md:col-6">
                    <Fieldset legend="Conseil  " toggleable>
                    <img src={`/demo/images/conseil.png`} className="w-6"  />
                        <p className="text-gray-800 sm:line-height-2 md:line-height-4 text-xl mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Fieldset>
                    <Button label="Supprimer" className="p-button-danger m-4" />
                    <Button label="Modifier" className="m-4"/>
                </div>
                <div className="card col-12 md:col-6">
                    <Fieldset legend="Op??ration et maintenance" toggleable>
                    <img src={`/demo/images/maintenance.png`} className="w-6"  />
                        <p className="text-gray-800 sm:line-height-2 md:line-height-4 text-xl mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Fieldset>
                    <Button label="Supprimer" className="p-button-danger m-4" />
                    <Button label="Modifier" className="m-4"/>
                </div>
            

           

            
        </div>
    );
};

export default PanelDemo;
