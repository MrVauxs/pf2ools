<script>
    import "bootstrap/dist/css/bootstrap.min.css";
    import {
        Nav,
        NavItem,
        Dropdown,
        DropdownItem,
        DropdownToggle,
        DropdownMenu,
        NavLink,
        Form,
        FormGroup,
        Label,
        Input,
        Button,
    } from "sveltestrap";

    let rules, books, player, gamemaster, adventures, references, utilities, settings;
</script>

<header>
    <div class="container">
        <h1 class="title">PF<span class="tools">2ools</span></h1>
        <p class="subtitle">
            A suite of tools for 2nd Edition Pathfinder players and Game
            Masters.
        </p>
    </div>
</header>
<div class="container">
    <navbar>
        <Nav pills>
            <NavItem href="/">
                <NavLink href="#">Home</NavLink>
            </NavItem>
            <Dropdown isOpen={rules ?? false} toggle={() => (rules = !rules)}>
                <DropdownToggle nav caret>Rules</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Quick Reference</DropdownItem>
                    <DropdownItem>Variant Rules & Subsystems</DropdownItem>
                    <DropdownItem>Tables</DropdownItem>
                    <DropdownItem divider />
                    <Dropdown direction="right" isOpen={books ?? false} toggle={() => (books = !books)}>
                        <DropdownToggle nav caret>Books</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Browse All</DropdownItem>
                            <DropdownItem divider />
                            <!-- Add Books here automatically-->
                            <DropdownItem disabled>Core Rulebook</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={player ?? false} toggle={() => (player = !player)}>
                <DropdownToggle nav caret>Player</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Ancestries</DropdownItem>
                    <DropdownItem>Backgrounds</DropdownItem>
                    <DropdownItem>Classes</DropdownItem>
                    <DropdownItem>Feats</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Archetypes</DropdownItem>
                    <DropdownItem>Companions & Familiars</DropdownItem>
                    <DropdownItem>Optional Features</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={gamemaster ?? false} toggle={() => (gamemaster = !gamemaster)}>
                <DropdownToggle nav caret>Game Master</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>GM Screen</DropdownItem>
                    <DropdownItem divider />
                    <Dropdown direction="right" isOpen={adventures ?? false} toggle={() => (adventures = !adventures)}>
                        <DropdownToggle nav caret>Adventures</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Browse All</DropdownItem>
                            <DropdownItem divider />
                            <!-- Add Books here automatically-->
                            <DropdownItem disabled>Strength of Thousand Contributors</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <DropdownItem>Events</DropdownItem>
                    <DropdownItem>Hazards</DropdownItem>
                    <DropdownItem>Relic Gifts</DropdownItem> <!-- Should this be in Game Master by this point? -->
                    <DropdownItem divider />
                    <DropdownItem>Creature Abilities</DropdownItem>
                    <DropdownItem>Creature Templates</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={references ?? false} toggle={() => (references = !references)}>
                <DropdownToggle nav caret>Game Master</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Actions</DropdownItem>
                    <DropdownItem>Bestiary</DropdownItem>
                    <DropdownItem>Conditions</DropdownItem>
                    <DropdownItem>Items</DropdownItem>
                    <DropdownItem>Spells</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Afflictions</DropdownItem>
                    <DropdownItem>Rituals</DropdownItem>
                    <DropdownItem>Vehicles</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Deities</DropdownItem>
                    <DropdownItem>Languages</DropdownItem>
                    <DropdownItem>Planes & Places</DropdownItem>
                    <DropdownItem>Organizations</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Traits</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={utilities ?? false} toggle={() => (utilities = !utilities)}>
                <DropdownToggle nav caret>Utilities</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Search</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Homebrew Manager</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Initiative Tracker Player View</DropdownItem>
                    <DropdownItem>Renderer Demo</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Text Converter</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Changelog</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Privacy Policy</DropdownItem>
                    <DropdownItem>Licenses</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={settings ?? false} toggle={() => (settings = !settings)}>
                <DropdownToggle nav caret>Settings</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Configure Styling</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Save State to File</DropdownItem>
                    <DropdownItem>Load State from File</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Add as an App</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Preload Images</DropdownItem>
                    <DropdownItem>Reset Preloaded Data</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Form>
                <FormGroup>
                    <Input
                        type="search"
                        id="omnisearch"
                        placeholder="Search Everywhere..."
                    />
                </FormGroup>
            </Form>
        </Nav>
    </navbar>

    <slot />
</div>

<style>
    header {
        box-shadow: 0 1px 8px rgb(0 0 0 / 48%);
        background-color: #6f1c17;
    }
    .title {
        margin-right: 10px;
        display: inline;
        color: #ededed;
    }
    .subtitle {
        display: inline;
        font-style: italic;
        color: #dac485;
    }
    .tools {
        color: #dac485;
    }
</style>
