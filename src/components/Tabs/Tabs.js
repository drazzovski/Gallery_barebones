import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card, List, ListItem } from '@material-ui/core';

//screens
import Templates from "../../screens/Templates/Templates";
import Videos from "../../screens/Videos/Videos";
import Clips from "../../screens/Clips/Clips";
import Images from "../../screens/Images/Images";
import Audio from "../../screens/Audio/Audio";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('0');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <>
            <div className="mb-spacing-12">
                <Grid container spacing={10}>
                    <Grid item lg={12}>
                        <Card className="shadow-xxl">
                            <List className="nav-tabs nav-tabs-warning tabs-animated tabs-animated-line justify-content-start d-flex">
                                <ListItem
                                    button
                                    selected={activeTab === '0'}
                                    onClick={() => {
                                        toggle('0');
                                    }}>
                                    <span className="px-3 py-2 font-weight-bold">Templates</span>
                                </ListItem>
                                <ListItem
                                    button
                                    selected={activeTab === '1'}
                                    onClick={() => {
                                        toggle('1');
                                    }}>
                                    <span className="px-3 py-2 font-weight-bold">Videos</span>
                                </ListItem>
                                <ListItem
                                    button
                                    selected={activeTab === '2'}
                                    onClick={() => {
                                        toggle('2');
                                    }}>
                                    <span className="px-3 py-2 font-weight-bold">Clips</span>
                                </ListItem>
                                <ListItem
                                    button
                                    selected={activeTab === '3'}
                                    onClick={() => {
                                        toggle('3');
                                    }}>
                                    <span className="px-3 py-2 font-weight-bold">Images</span>
                                </ListItem>
                                <ListItem
                                    button
                                    selected={activeTab === '4'}
                                    onClick={() => {
                                        toggle('4');
                                    }}>
                                    <span className="px-3 py-2 font-weight-bold">Audio</span>
                                </ListItem>
                            </List>

                            <div
                                className={clsx('tab-item-wrapper', {
                                    active: activeTab === '0'
                                })}
                                index={0}>
                                <Templates />
                            </div>
                            <div
                                className={clsx('tab-item-wrapper', {
                                    active: activeTab === '1'
                                })}
                                index={1}>
                                <Videos />
                            </div>
                            <div
                                className={clsx('tab-item-wrapper', {
                                    active: activeTab === '2'
                                })}
                                index={2}>
                                <Clips />
                            </div>
                            <div
                                className={clsx('tab-item-wrapper', {
                                    active: activeTab === '3'
                                })}
                                index={3}>
                                <Images />
                            </div>
                            <div
                                className={clsx('tab-item-wrapper', {
                                    active: activeTab === '4'
                                })}
                                index={4}>
                                <Audio />
                            </div>
                        </Card>
                    </Grid>

                </Grid>
            </div>
        </>
    );
}
