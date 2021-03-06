import React from "react";

import Board from "react-trello";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container
} from "reactstrap";

import styles from "../../styles/ProjectTasks.module.css";
import TaskDetail from "./TaskDetail";
import { StickyNote } from "../misc/StickyNote";

const CustomLaneHeader = props => {
    return (
        <p className={styles.p}>
            {props.title}{" "}
            <i
                onClick={props.onToggleModal}
                name="editBoardIcon"
                data-id={props.id}
                data-title={props.title}
                className={`fas fa-pencil-alt ${styles.editIcon}`}
            />
        </p>
    );
};

export const ProjectTasks = props => {
    console.log(props.data);
    return (
        <div style={{ height: "calc(100% - 40px)" }}>
            <Container fluid style={{ height: "100%", padding: 0 }}>
                <Board
                    data={props.data}
                    eventBusHandle={props.eventBusHandle}
                    collapsibleLanes
                    draggable
                    editable
                    onLaneClick={props.onLaneClick}
                    onCardClick={props.onCardClick}
                    onCardAdd={props.onCardAdd}
                    handleDragEnd={props.handleDragEnd}
                    customLaneHeader={<CustomLaneHeader onToggleModal={props.onToggleEditModal} />}
                    customCardLayout
                    style={{
                        backgroundColor: "#fff",
                        fontFamily: "unset",
                        height: "100%",
                        paddingLeft: 15
                    }}
                >
                    <StickyNote />
                </Board>
            </Container>

            <TaskDetail
                taskName={props.clickedTaskName}
                modalOpen={props.showCardModal}
                onToggleModal={props.onToggleCardModal}
                cardObject={props.cardObject}
                onTextInputChange={props.onCardTextInputChange}
                onTaskDeadlineChange={props.onTaskDeadlineChange}
                onPriorityChange={props.onPriorityChange}
                saveTask={props.saveTask}
            />

            <Modal
                isOpen={props.modalOpen}
                toggle={props.editing ? props.onToggleEditModal : props.onToggleModal}
            >
                <ModalHeader toggle={props.editing ? props.onToggleEditModal : props.onToggleModal}>
                    {" "}
                    {props.editing ? "Edit Board" : "New Board"}{" "}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="projectName">Board Name</Label>
                            <Input
                                type="text"
                                name="boardName"
                                id="boardName"
                                placeholder="Enter board name"
                                onChange={props.onBoardNameChange}
                                value={props.boardName}
                            />

                            {props.editing ? (
                                <Container>
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            checked={props.editBoardType}
                                            onChange={props.onBoardTypeChange}
                                        />{" "}
                                        Tasks in this board are completed
                                    </Label>
                                </Container>
                            ) : null}
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        onClick={props.editing ? props.onToggleEditModal : props.onToggleModal}
                    >
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        onClick={props.editing ? props.onSaveBoard : props.onCreateBoard}
                    >
                        {props.editing ? "Save Board" : "Create Board"}
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
