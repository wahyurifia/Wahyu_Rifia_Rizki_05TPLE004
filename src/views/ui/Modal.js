import React, { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Form,
    Row,
    Col,
    FormGroup,
    Label,
} from 'reactstrap';

export const AddKaryawan = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const [jabatan, setJabatan] = useState("");

    const handleSubmit = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = { name, email, alamat, jabatan };

        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users));

        toggle();
        setName('');
        setEmail('');
        setAlamat('');
        setJabatan('');
        window.location.reload();
    }

    return (
        <div>
            <Button className="btn" outline color="success"
                onClick={toggle}
            >
                <i className="bi bi-plus-square"></i>
            </Button>

            <Modal isOpen={open} toggle={toggle} >
                <ModalHeader >Modal title</ModalHeader>
                <ModalBody>
                    <Form >
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleName">
                                        Name
                                    </Label>
                                    <Input
                                        id="exampleName"
                                        name="name"
                                        placeholder="with a placeholder"
                                        type="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Email placeholder"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleAlamat">
                                Alamat
                            </Label>
                            <Input
                                id="exampleAlamat"
                                name="alamat"
                                placeholder="1234 Main St"
                                type='textarea'
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                            />
                        </FormGroup>

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleJabatan">
                                        Jabatan
                                    </Label>
                                    <Input
                                        id="exampleJabatan"
                                        name="jabatan"
                                        value={jabatan}
                                        onChange={(e) => setJabatan(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>

                        </Row>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        Simpan
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>)
}

export const AddJabatan = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const [jabatan, setJabatan] = useState("");


    const handleSubmit = () => {
        const jabatans = JSON.parse(localStorage.getItem('jabatans')) || [];
        const newJabatan = { jabatan };

        jabatans.push(newJabatan);
        localStorage.setItem('jabatans', JSON.stringify(jabatans));
        toggle();
        setJabatan('');
        window.location.reload();

    }
    return (
        <div>
            <Button className="btn" outline color="success"
                onClick={toggle}
            >
                <i className="bi bi-plus-square"></i>
            </Button>

            <Modal isOpen={open} toggle={toggle} >
                <ModalHeader >Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleJabatan">
                                Jabatan
                            </Label>
                            <Input
                                id="exampleJabatan"
                                name="jabatan"
                                value={jabatan}
                                onChange={(e) => setJabatan(e.target.value)}
                            />
                        </FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        Simpan
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>)
}

export const AddDivisi = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const [divisi, setDivisi] = useState("");

    const handleSubmit = () => {

        const divisis = JSON.parse(localStorage.getItem('divisis')) || [];
        const newDivisi = { divisi };
        divisis.push(newDivisi);
        localStorage.setItem('divisis', JSON.stringify(divisis));

        toggle();
        setDivisi('');
        window.location.reload();
    }
    return (
        <div>
            <Button className="btn" outline color="success"
                onClick={toggle}
            >
                <i className="bi bi-plus-square"></i>
            </Button>

            <Modal isOpen={open} toggle={toggle} >
                <ModalHeader >Modal title</ModalHeader>
                <ModalBody>
                    <Form>

                        <FormGroup>
                            <Label for="exampleDivisi">
                                Divisi
                            </Label>
                            <Input
                                id="exampleDivisi"
                                name="divisi"
                                value={divisi}
                                onChange={(e) => setDivisi(e.target.value)}
                            />
                        </FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        Simpan
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>)
}



