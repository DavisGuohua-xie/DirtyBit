import React from "react";
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
    Row,
    Container
} from "reactstrap";

const AddMemberModal = props => {
    return (
        <Modal
                    isOpen={props.modalOpen}
                    toggle={props.toggleAddMemberModal}
                    className={props.className}
                >
                    <ModalHeader toggle={props.toggleAddMemberModal}>
                        Add New Team Member
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="usertName">User Name or Email</Label>
                                <Input
                                    type="text"
                                    name="usernameinput"
                                    id="userName"
                                    placeholder="Agility"
                                    onChange={props.handleNewName}
                                />
                                <Label for="role">Role</Label>
                                <Input
                                    type="text"
                                    name="role"
                                    id="role"
                                    placeholder="Software Architect, Algorithm Specialist, etc."
                                    onChange={props.handleNewRole}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={props.toggleAddMemberModal}>
                            Cancel
                        </Button>
                        <Button color="primary" onClick={props.handleAddMember}>
                            Add
                        </Button>
                    </ModalFooter>
                </Modal>
    );
};

export default AddMemberModal;